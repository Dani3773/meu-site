const messages = {
  pt: {
    title: 'Bem-vindo',
    description: 'Este é um exemplo de aplicação multilíngue.',
  },
  en: {
    title: 'Welcome',
    description: 'This is a multilingual application example.',
  },
  de: {
    title: 'Willkommen',
    description: 'Dies ist ein Beispiel für eine mehrsprachige Anwendung.',
  },
};

export function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const { title, description } = messages[locale as keyof typeof messages];

  return {
    title,
    description,
  };
}
