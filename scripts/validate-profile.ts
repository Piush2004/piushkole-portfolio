import { profile } from '../src/data/profile';

async function validateProfile() {
  console.log("🔍 Validating Professional Profile Data...\n");
  const errors: string[] = [];
  const warnings: string[] = [];

  // 1. Validate Personal Information
  if (!profile.name || profile.name.trim() === '') errors.push("Missing: Name");
  if (!profile.role || profile.role.trim() === '') errors.push("Missing: Role");
  if (!profile.headline || profile.headline.trim() === '') errors.push("Missing: Headline");

  // 2. Validate Contact & Social Links
  if (!profile.contact.emails || profile.contact.emails.length === 0) errors.push("Missing: Email");
  else if (!profile.contact.emails[0].includes('@')) errors.push(`Invalid Email Format: ${profile.contact.emails[0]}`);

  if (!profile.socials.linkedin.includes('linkedin.com')) errors.push("Invalid LinkedIn URL");
  if (!profile.socials.github.includes('github.com')) errors.push("Invalid GitHub URL");
  if (!profile.socials.resume || profile.socials.resume.trim() === '') errors.push("Missing Resume Link");

  // 3. Validate Experience
  profile.experience.forEach((exp, idx) => {
    if (!exp.title) errors.push(`Experience [${idx}]: Missing Title`);
    if (!exp.company) errors.push(`Experience [${idx}]: Missing Company`);
    if (!exp.duration) warnings.push(`Experience [${idx}]: Missing Duration`);
  });

  // 4. Validate Education
  profile.education.forEach((edu, idx) => {
    if (!edu.degree) errors.push(`Education [${idx}]: Missing Degree`);
    if (!edu.university) errors.push(`Education [${idx}]: Missing University`);
    if (!edu.duration) warnings.push(`Education [${idx}]: Missing Duration`);
  });

  // 5. Validate Projects
  const projectTitles = new Set();
  profile.projects.forEach((proj, idx) => {
    if (!proj.title) errors.push(`Project [${idx}]: Missing Title`);
    else {
      if (projectTitles.has(proj.title)) errors.push(`Project [${idx}]: Duplicate Project Title "${proj.title}"`);
      projectTitles.add(proj.title);
    }
    
    if (!proj.description) errors.push(`Project [${proj.title || idx}]: Missing Description`);
    if (!proj.techStack || proj.techStack.length === 0) errors.push(`Project [${proj.title || idx}]: Missing Tech Stack`);
    
    if (proj.githubUrl && proj.githubUrl !== '#' && !proj.githubUrl.includes('github.com')) {
      errors.push(`Project [${proj.title || idx}]: Invalid GitHub URL "${proj.githubUrl}"`);
    }
  });

  // 6. Validate Certificates
  profile.certifications.forEach((cert, idx) => {
    if (!cert.title) errors.push(`Certificate [${idx}]: Missing Title`);
    if (!cert.issuer) errors.push(`Certificate [${idx}]: Missing Issuer`);
    
    const credentialUrl = (cert as { credentialUrl?: string | null }).credentialUrl;
    if (credentialUrl && credentialUrl !== '#' && typeof credentialUrl === 'string' && !credentialUrl.startsWith('http')) {
      errors.push(`Certificate [${cert.title || idx}]: Invalid Credential URL "${credentialUrl}"`);
    } else if (!credentialUrl) {
      warnings.push(`Certificate [${cert.title || idx}]: Missing Credential URL`);
    }
  });

  // 7. Validate GitHub Metadata
  if (!profile.github.username) errors.push("Missing GitHub Username");

  // Output Results
  if (warnings.length > 0) {
    console.log("⚠️  WARNINGS:");
    warnings.forEach(w => console.log(`  - ${w}`));
    console.log("\n");
  }

  if (errors.length > 0) {
    console.error("❌ ERRORS FOUND IN PROFILE DATA:");
    errors.forEach(e => console.error(`  - ${e}`));
    console.error("\nValidation Failed! Please fix the inconsistencies in src/data/profile.ts before building.");
    process.exit(1);
  }

  console.log("✅ Profile Validation Passed! No inconsistencies found.");
}

validateProfile().catch((err) => {
  console.error("An unexpected error occurred during validation:", err);
  process.exit(1);
});
