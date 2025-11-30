import React from "react";

function StatusCard({ title, children }) {
  return (
    <div className='py-8 px-6 rounded-2xl bg-card shadow-card md:p-12 grid gap-2'>
      <h2 className='text-2xl font-bold text-heading text-center'>
        {title}
      </h2>
      <div className='text-center'>{children}</div>
    </div>
  );
}

export default StatusCard;
