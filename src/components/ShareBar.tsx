import {useStore} from '@nanostores/react';
import {data} from '../shared/store';
import {Icon} from '@iconify/react';
import './ShareBar.css';

export function ShareBar() {
    const {share} = useStore(data);
    return (
        <div className="share-container">
            <p className="share-heading">Share</p>
            <div className="share-button">
                <a href={share.sms}>
                    <Icon icon="simple-icons:imessage" width={64} height={64} color="#39ff5a"/>
                </a>
            </div>
        </div>
    )
}