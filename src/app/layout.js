import { Manrope } from "next/font/google";
import "@/styles/reset.css";
import "@/styles/globals.css";
import "@/styles/general.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import SegmentsPopup from "@/components/modals/segments/SegmentsPopup";
import ContactUs from "@/components/modals/ContactUs/ContactUs";
import Cases from "@/components/modals/cases/Cases";
import CalendarPopup from "@/components/modals/calendar/Calendar";
import AnimatedBackground from "@/components/animatedBackground/AnimatedBackground";
import Certificates from "@/components/modals/certificates/Сertificates";
import VideoPopup from "@/components/modals/VideoPopup/VideoPopup";

const manrope = Manrope({
  subsets: ["latin"], // Выберите нужные наборы символов
  weights: ["300", "400", "500", "700"], // Укажите веса шрифта
  variable: "--manrope", // Создайте CSS переменную для использования шрифта
});

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable}`}>
        <Header />
        {children}
        <Footer />
        <SegmentsPopup/>
        <ContactUs/>
        <Cases/>
        <CalendarPopup/>
        <AnimatedBackground/>
        <Certificates/>
        <VideoPopup/>
      </body>
    </html>
  );
}
