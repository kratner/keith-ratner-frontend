// src/components/QRCode/QRCode.tsx
import { QRCodeSVG } from "qrcode.react";
import type { FC } from "react";

const QRCode: FC = () => {
	return (
		<section id="qr-code" className="qr-code">
			<div className="qr-code__border">
				<QRCodeSVG
					value="https://keithratner.live"
					size={128}
					level="H"
					fgColor="#1a365d"
					bgColor="#ffffff"
					includeMargin={true}
				/>
			</div>
		</section>
	);
};

export default QRCode;
