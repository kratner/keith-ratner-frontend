// src/components/QRCode/QRCode.tsx
import { QRCodeSVG } from "qrcode.react";
import type { FC } from "react";

const TestQRCode: FC = () => {
	return (
		<div style={{ padding: "20px", backgroundColor: "white" }}>
			<QRCodeSVG
				value="https://keithratner.live"
				size={128}
				level="H"
				fgColor="#1a365d"
				bgColor="#ffffff"
				includeMargin={true}
			/>
		</div>
	);
};

export default TestQRCode;
