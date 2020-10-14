import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/react';
type EbookProps = {
  book_cover: string;
  headline: string;
  call_to_action: string;
  call_to_action_url: string;
};

export const Ebook = (props: EbookProps) => {
  return (
    <IonCard button={true} href={props.call_to_action_url} target="blank">
      <img src={props.book_cover} alt="a book promotion" />
      <IonCardHeader>
        <IonCardTitle>{props.headline}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>{props.headline}</p>
      </IonCardContent>
    </IonCard>
  );
};
