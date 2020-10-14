import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/react';

type TestimonialProps = {
  customer_image: string;
  quote: string;
  person: string;
  company_name: string;
};

export function Testimonial(props: TestimonialProps) {
  return (
    <IonCard>
      <img src={props.customer_image} alt="Amtrak"/>
      <IonCardHeader>
        <IonCardTitle>{props.company_name}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <blockquote>{props.quote}</blockquote>
        <p>{props.person}</p>
      </IonCardContent>
    </IonCard>
  );
}
