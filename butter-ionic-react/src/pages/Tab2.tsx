import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './Tab2.css';
import { butter } from '../util/butter';
import { IPageType } from '../util/types';
import { CTA } from '../components/CTA';
import { Testimonial } from '../components/Testimonial';
import { Ebook } from '../components/Ebook';

const Tab2: React.FC = () => {
  const [pageData, setPageData] = useState<IPageType>({});

  useEffect(() => {
    (async () => {
      const res = await butter.page.retrieve('*', 'enterprise');
      setPageData(res.data.data);
    })();
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true} className="ion-padding">

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        {pageData.fields?.sections.map((section) => {
          if (section.type === 'two_column_with_3_bullets') {
            return <CTA {...section.fields} key={section.type} />;
          } else if (section.type === 'testimonial') {
            return <Testimonial {...section.fields} key={section.type} />;
          } else if (section.type === 'ebook_callout') {
            return <Ebook {...section.fields} key={section.type} />;
          }
        })}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
