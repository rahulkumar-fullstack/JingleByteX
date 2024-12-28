"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">
          Developed by <br />
          <Link href="https://rahulkumar-fullstack.web.app" target="_blank" className="text-blue-500 hover:underline">
            <strong className="animate-pulse">Rahulkumar Gupta</strong>
          </Link>
        </p>

        <div className="flex justify-center space-x-4">
          <Link href="https://github.com/rahulkumar-fullstack" target="_blank" className="text-gray-300 hover:text-white">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </Link>
          <Link href="https://www.linkedin.com/in/rahulkumar-fullstack" target="_blank" className="text-gray-300 hover:text-white">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </Link>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          &copy; {currentYear} JingleByteX. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
