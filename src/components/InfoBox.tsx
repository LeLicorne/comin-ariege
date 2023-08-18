/* eslint-disable @typescript-eslint/no-explicit-any */

import { FaEnvelope } from 'react-icons/fa';

const FaLocationDot = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 384 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </svg>
  );
};

const FaPhoneVolume = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" />
    </svg>
  );
};

const FaPhone = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
    </svg>
  );
};

function InfoLine(options: { title: string; icon: any; content: string | JSX.Element }) {
  const { title, icon, content } = options;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-3 items-center">
        <span className="text-primary text-xl">{icon}</span>
        <p className="text-black/70 font-semibold text-xl">{title}</p>
      </div>
      {typeof content !== 'string' && content}
      {typeof content === 'string' && (
        <p className="text-black/70 font-normal whitespace-break-spaces text-left">{content}</p>
      )}
    </div>
  );
}

const CallButton = () => {
  return (
    <div className="flex flex-row bg-zinc-100 items-center">
      <input
        type="text"
        name="phone"
        id=""
        placeholder="+33(0) 6 66 77 88 99"
        className="flex sm:min-w-max w-full bg-transparent px-4 text-normal focus:outline-none"
      />
      <button
        type="submit"
        className="hidden sm:block text-black font-semibold bg-primary px-4 py-2 m-2 whitespace-nowrap"
      >
        Appelez-moi !
      </button>
      <button type="submit" className="sm:hidden text-black font-semibold bg-primary px-4 py-2 m-2 whitespace-nowrap">
        <FaPhoneVolume />
      </button>
    </div>
  );
};

export default function InfoBox() {
  return (
    <div className="flex flex-col p-9 gap-16 lg:gap-6 lg:justify-between bg-white shadow-card">
      <div className="flex flex-col gap-6">
        <InfoLine title="Com In Ariège" icon={<FaLocationDot />} content={`8 AVENUE DE DALOU,\n09120 VARILHES`} />
        <InfoLine title="Appelez-nous" icon={<FaPhone />} content="+33(0) 6 63 56 34 78" />
        <InfoLine title="Envoyez-nous un mail" icon={<FaEnvelope />} content="contact@cominariege.fr" />
      </div>
      <InfoLine title="On vous appelle ?" icon={<FaPhoneVolume />} content={<CallButton />} />
    </div>
  );
}
