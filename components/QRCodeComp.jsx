
import { useState } from 'react';
import QRCode from 'qrcode.react';

const QRCodeComp = () => {
  const [text, setText] = useState('');
  const handleSaveClick = () => {
    const canvas = document.getElementById('qr-code-canvas');
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = 'QR-Code.png';
    link.click();
  };
  return (
    <div className="flex flex-col items-center ">
      <div>
      <h1 className=' text-white pb-2 text-lg font-semibold'>Enter URL or Text</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter URL or Text"
        className="p-2 mb-4 rounded-xl focus:outline-none w-[40vw]"
      />

      </div>
      {text && (
        <div>
          <QRCode id="qr-code-canvas" className='p-4 bg-white rounded-xl' value={text} size={256} />
          <button
            onClick={handleSaveClick}
            className="mt-4 p-2 bg-slate-800 rounded-xl text-white  cursor-pointer"
          >
            Save QR Code
          </button>
        </div>
      )}
    </div>
  );
};

export default QRCodeComp;
