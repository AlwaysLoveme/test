import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCheckbox} from '@ionic/react';
import './Home.css';
import {useRef, useEffect} from 'react'

const Home: React.FC = () => {
    const ref = useRef<HTMLSpanElement>(null)
    useEffect(() => {
        ref.current?.addEventListener("click", (e) => {
            e.stopPropagation();
        });
    }, [])
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Blank</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Blank</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonCheckbox>
                    123123
                    <span ref={ref}>StopPropagation</span>
                </IonCheckbox>
            </IonContent>
        </IonPage>
    );
};

export default Home;
