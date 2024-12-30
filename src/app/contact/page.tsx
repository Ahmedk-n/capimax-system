import React from 'react';
import Breadcrumb from '@/components/common/Breadcrumb';
import Wrapper from '@/layout/Wrapper';
import ContactArea from '@/components/contact/ContactArea';
import DocumentArea from '@/components/common/DocumentArea';

export const metadata = {
   title: "Contact CapiMax - Investments  ",
};

const ContactPage = () => {
  return (
    <Wrapper>
      <Breadcrumb title="Contact Us" />
      <ContactArea />
      <DocumentArea />
    </Wrapper>
  );
};

export default ContactPage;