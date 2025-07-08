'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const AnnouncementModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const closeMessage = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="message_container" id="messageBox">
      <div className="message">
        <button className="close-btn" onClick={closeMessage}>&times;</button>
        <div className="title">Important Announcement</div>
        <div>
          <ul className="announcement-list" style={{ color: 'red' }}>
            <li>
              <strong>Selected papers from each of the six themes will be given the
                Best Paper Award.</strong>
            </li>
            <li>
              <strong>Deadline for full-length paper submission is extended upto 31st March, 2025.</strong>
            </li>
            <li>
              <strong>The early bird registration date is extended to 12th April 2025. 
                Those who are still not registered, complete your registration before the deadline.
                </strong>
            </li>
            <div className="button-container">
              <Link href="https://forms.gle/oSTYgWQ7NNUjn3xp9" target="_blank" className="submit-btn">
                Registration Link
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementModal;