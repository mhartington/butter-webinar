import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonItem,
  IonList,
  IonIcon,
} from '@ionic/react';
type Benefit = {
  icon: string;
  headline: string;
  subheadline: string;
};
type CTAProps = {
  headline: string;
  subheadline: string;
  call_to_action: string;
  call_to_action_url: string;
  benefits: Benefit[];
};

export const CTA = (props: CTAProps) => {
  return (
    <IonCard button={true} href={props.call_to_action_url} target="blank">
      <IonCardHeader>
        <IonCardTitle>{props.headline}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonCardSubtitle>{props.subheadline}</IonCardSubtitle>
        <IonList>
          {props.benefits.map((benefit, idx) => (
            <IonItem key={idx.toString()}>
              <IonIcon slot="start" src={benefit.icon} />
              {benefit.headline}
            </IonItem>
          ))}
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};
