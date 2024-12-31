import React from 'react';
import Breadcrumb from '@/components/common/Breadcrumb';
import Wrapper from '@/layout/Wrapper';
import ContactArea from '@/components/contact/ContactArea';

export const metadata = {
   title: "Contact CapiMax - Investments  ",
};

const ContactPage = () => {
  return (
    <Wrapper>
      <Breadcrumb title="Contact Us" />
      <ContactArea />
    </Wrapper>
  );
};

export default ContactPage;