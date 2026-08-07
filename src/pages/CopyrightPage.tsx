import PageLayout from '../components/PageLayout';

export default function CopyrightPage() {
  return (
    <PageLayout pageNumber={2}>
      <div className="flex flex-col justify-center h-full" style={{ minHeight: '980px' }}>
        <div className="max-w-md mx-auto">
          {/* Book title */}
          <h2 className="text-xl font-bold text-gray-900 mb-1">Zero to $100</h2>
          <p className="text-sm text-gray-500 mb-8">Your First 30 Days in Affiliate Marketing (No Audience Needed)</p>
          
          <div className="h-px bg-gradient-to-r from-blue-500 to-purple-500 mb-8 opacity-30" />
          
          <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
            <div>
              <p className="font-semibold text-gray-800 mb-1">Copyright © 2025 V Abhishek</p>
              <p>All rights reserved.</p>
            </div>
            
            <div>
              <p className="font-semibold text-gray-800 mb-1">Publishing Rights</p>
              <p>No part of this publication may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the author, except in the case of brief quotations embodied in critical reviews and certain other noncommercial uses permitted by copyright law.</p>
            </div>
            
            <div>
              <p className="font-semibold text-gray-800 mb-1">Disclaimer</p>
              <p>The information contained in this book is for general information and educational purposes only. The author makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information provided.</p>
            </div>
            
            <div>
              <p>Any action you take upon the information in this book is strictly at your own risk. The author will not be liable for any losses or damages in connection with the use of this book.</p>
            </div>
            
            <div>
              <p>Earnings and income statements made by the author are only estimates of what is possible. There is no guarantee that you will earn any money using the techniques and ideas in this book. Results vary and depend on many factors including but not limited to your background, experience, and work ethic.</p>
            </div>
            
            <div>
              <p className="font-semibold text-gray-800 mb-1">Affiliate Disclosure</p>
              <p>This book may contain references to affiliate programs and products. As an affiliate marketer, the author may earn commissions from qualifying purchases made through links mentioned in this book.</p>
            </div>
            
            <div className="pt-4">
              <p className="font-semibold text-gray-800 mb-1">Author</p>
              <p>V Abhishek</p>
            </div>
            
            <div>
              <p className="font-semibold text-gray-800 mb-1">First Edition</p>
              <p>Published 2025</p>
            </div>
          </div>
          
          <div className="h-px bg-gradient-to-r from-blue-500 to-purple-500 mt-8 opacity-30" />
          
          {/* Decorative element */}
          <div className="mt-8 text-center">
            <svg viewBox="0 0 100 30" className="w-16 mx-auto opacity-20">
              <circle cx="20" cy="15" r="4" fill="#2563eb" />
              <circle cx="50" cy="15" r="4" fill="#7c3aed" />
              <circle cx="80" cy="15" r="4" fill="#06b6d4" />
            </svg>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
