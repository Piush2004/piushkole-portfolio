"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X } from "lucide-react";
import { profile } from "@/data/profile";

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  return (
    <section id="certificates" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Certifications
          </h2>
          <div className="w-12 h-1 bg-foreground rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profile.certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedCert(idx)}
              className="bg-card border border-border/50 rounded-2xl p-8 cursor-pointer flex flex-col items-start text-left hover:border-foreground/30 hover:shadow-sm transition-all"
            >
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 leading-snug">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 font-medium">{cert.issuer} • {cert.date}</p>
              <span className="px-3 py-1 bg-background border border-border/50 text-xs font-semibold text-muted-foreground rounded-md mt-auto">
                Verified
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-background/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl aspect-[4/3] bg-card border border-border rounded-xl flex items-center justify-center shadow-2xl"
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute -top-4 -right-4 p-2 bg-background hover:bg-card border border-border rounded-full text-foreground transition-colors z-50 shadow-lg"
              >
                <X size={24} />
              </button>
              
              {/* Simulated Certificate Graphic */}
              <div className="w-[90%] h-[85%] border-[8px] border-double border-muted-foreground/30 flex flex-col items-center justify-center p-8 text-center relative bg-background">
                <Award className="w-16 h-16 text-primary opacity-50 absolute top-8" />
                <h2 className="text-4xl font-serif text-foreground mb-4 mt-8">Certificate of Completion</h2>
                <p className="text-muted-foreground mb-8 text-lg">This certifies that</p>
                <h1 className="text-5xl font-bold text-primary mb-8 font-serif">{profile.name}</h1>
                <p className="text-muted-foreground mb-2 text-lg">has successfully completed</p>
                <h3 className="text-2xl font-bold text-foreground">{profile.certifications[selectedCert]?.title}</h3>
                <p className="text-muted-foreground mt-8 text-sm absolute bottom-8 left-8">{profile.certifications[selectedCert]?.issuer}</p>
                <p className="text-muted-foreground mt-8 text-sm absolute bottom-8 right-8">Issued: {profile.certifications[selectedCert]?.date}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
