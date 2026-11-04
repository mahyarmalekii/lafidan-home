export interface Inquiry {
  name: string;
  email: string;
  phone: string;
  message: string;
  projectType?: string;
}

export function inquiryEmail(data: Inquiry, labels: {
  nameLabel: string; emailLabel: string; phoneLabel: string;
  messageLabel: string; projectTypeLabel: string; formTitle: string;
}, projectType?: string) {
  const lines = [
    `${labels.nameLabel}: ${data.name}`,
    `${labels.emailLabel}: ${data.email}`,
    `${labels.phoneLabel}: ${data.phone}`,
    ...(projectType ? [`${labels.projectTypeLabel}: ${projectType}`] : []),
    '', `${labels.messageLabel}:`, data.message,
  ];
  return `mailto:Lafidanug@gmail.com?subject=${encodeURIComponent(labels.formTitle)}&body=${encodeURIComponent(lines.join('\r\n'))}`;
}

export const emailHelp = {
  fa: 'برنامه ایمیل شما پیامی آماده با اطلاعات واردشده باز می‌کند. لطفاً اطلاعات را بررسی کنید و در همان برنامه دکمه ارسال را بزنید. اگر برنامه‌ای باز نشد، برنامه ایمیل خود را تنظیم کنید یا به Lafidanug@gmail.com بنویسید. اطلاعات شما در این فرم باقی می‌ماند.',
  de: 'Ihr E-Mail-Programm öffnet eine vorausgefüllte Nachricht. Bitte prüfen Sie die Angaben und drücken Sie dort auf Senden. Falls nichts passiert, richten Sie eine E-Mail-App ein oder schreiben Sie an Lafidanug@gmail.com. Ihre Angaben bleiben hier erhalten.',
  en: 'Your email app opens a prefilled message. Review the details and press Send there. If nothing opens, set up an email app or write to Lafidanug@gmail.com. Your details stay in this form.',
  tr: 'E-posta uygulamanız önceden doldurulmuş bir mesaj açar. Bilgileri kontrol edip orada Gönder düğmesine basın. Açılmazsa bir e-posta uygulaması ayarlayın veya Lafidanug@gmail.com adresine yazın. Bilgileriniz formda kalır.',
};
