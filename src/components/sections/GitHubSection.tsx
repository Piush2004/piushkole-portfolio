"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitBranch, GitCommit, Star, GitFork, Activity, Code } from "lucide-react";
import { profile } from "@/data/profile";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const fallbackRepos = profile.projects
  .filter(p => p.githubUrl && p.githubUrl !== "#")
  .map(p => ({
    name: p.title,
    desc: p.description,
    lang: p.techStack[0] || "Python",
    stars: 0,
    forks: 0,
    url: p.githubUrl!
  })).slice(0, 4);

export default function GitHubSection() {
  const [stats, setStats] = useState({
    stars: profile.github.stars,
    commits: profile.github.commits,
    repos: profile.github.public_repos,
    followers: profile.github.followers
  });
  const [repos, setRepos] = useState(fallbackRepos);

  useEffect(() => {
    // Fetch live user stats
    fetch(`https://api.github.com/users/${profile.github.username}`)
      .then(res => res.json())
      .then(data => {
        if (data.public_repos !== undefined) {
          setStats(prev => ({ ...prev, followers: data.followers, repos: data.public_repos }));
        }
      })
      .catch(err => console.error("Error fetching GitHub stats", err));

    // Fetch live repos
    fetch(`https://api.github.com/users/${profile.github.username}/repos?sort=updated&per_page=4`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const liveRepos = data.map((repo: { name: string; description: string | null; language: string | null; stargazers_count: number; forks_count: number; html_url: string; }) => ({
            name: repo.name,
            desc: repo.description || "No description provided.",
            lang: repo.language || "Markdown",
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            url: repo.html_url
          }));
          setRepos(liveRepos);
          
          // Calculate total stars from fetched repos (as an approximation)
          const totalStars = data.reduce((acc: number, curr: { stargazers_count: number }) => acc + curr.stargazers_count, 0);
          if (totalStars > 0) {
             setStats(prev => ({ ...prev, stars: totalStars }));
          }
        }
      })
      .catch(err => console.error("Error fetching GitHub repos", err));
  }, []);

  return (
    <section id="github" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Open Source
          </h2>
          <div className="w-12 h-1 bg-foreground rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stats Overview */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-card border border-border/50 rounded-2xl p-8 hover:shadow-sm transition-shadow"
            >
              <h3 className="text-lg font-bold text-foreground mb-6 flex items-center">
                <Activity className="w-5 h-5 mr-2 text-muted-foreground" /> Analytics
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Stars", value: stats.stars, icon: Star },
                  { label: "Commits", value: stats.commits, icon: GitCommit },
                  { label: "Repositories", value: stats.repos, icon: GitBranch },
                  { label: "Followers", value: stats.followers, icon: Activity }
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <div className="flex items-center text-muted-foreground mb-2">
                      <stat.icon className="w-4 h-4 mr-2" />
                      <span className="text-xs uppercase tracking-wider font-semibold">{stat.label}</span>
                    </div>
                    <p className="text-3xl font-bold text-foreground">
                      <AnimatedCounter value={stat.value} />
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border/50 rounded-2xl p-8 flex-grow hover:shadow-sm transition-shadow"
            >
              <h3 className="text-lg font-bold text-foreground mb-6 flex items-center">
                <Code className="w-5 h-5 mr-2 text-muted-foreground" /> Top Languages
              </h3>
              <div className="space-y-6">
                {[
                  { lang: "Python", pct: 65 },
                  { lang: "TypeScript", pct: 25 },
                  { lang: "Jupyter", pct: 10 },
                ].map((item) => (
                  <div key={item.lang}>
                    <div className="flex justify-between text-sm mb-2 font-medium">
                      <span className="text-foreground">{item.lang}</span>
                      <span className="text-muted-foreground">{item.pct}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-foreground" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Repositories & Graph */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
              {repos.map((repo, idx) => (
                <motion.a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={repo.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-card border border-border/50 rounded-2xl p-8 hover:border-foreground/30 hover:shadow-md transition-all group flex flex-col"
                >
                  <h3 className="text-lg font-bold text-foreground mb-3">{repo.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">{repo.desc}</p>
                  
                  <div className="flex items-center justify-between text-sm mt-auto">
                    <span className="flex items-center font-medium text-foreground">
                      <span className={`w-2.5 h-2.5 rounded-full mr-2 ${repo.lang === 'Python' ? 'bg-blue-500' : 'bg-blue-400'}`} />
                      {repo.lang}
                    </span>
                    <div className="flex space-x-4 text-muted-foreground font-medium">
                      <span className="flex items-center">
                        <Star size={16} className="mr-1.5" /> {repo.stars}
                      </span>
                      <span className="flex items-center">
                        <GitFork size={16} className="mr-1.5" /> {repo.forks}
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Premium Contribution Graph Alternative */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border/50 rounded-2xl p-8 hover:shadow-sm transition-shadow overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <h3 className="text-lg font-bold text-foreground">Contribution Activity</h3>
                <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                  {profile.github.commits.toLocaleString()} commits this year
                </span>
              </div>
              
              <div className="flex gap-1.5 overflow-x-auto custom-scrollbar pb-2">
                {Array.from({ length: 52 }).map((_, week) => (
                  <div key={week} className="flex flex-col gap-1.5">
                    {Array.from({ length: 7 }).map((_, day) => {
                      // Deterministic seed
                      const seed = week * 7 + day;
                      const intensity = ((seed * 9301 + 49297) % 233280) / 233280;
                      
                      let colorClass = "bg-muted";
                      if (intensity > 0.8) colorClass = "bg-foreground";
                      else if (intensity > 0.5) colorClass = "bg-foreground/70";
                      else if (intensity > 0.2) colorClass = "bg-foreground/40";
                      
                      return (
                        <motion.div 
                          key={`${week}-${day}`} 
                          className={`w-3.5 h-3.5 rounded-sm ${colorClass}`}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: seed * 0.001 }}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
