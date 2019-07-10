import React from 'react';
import { getImageUrl } from '../global/helpers';
import './styles/Actor.sass';

const Actor = ({ actor }) => (
	<div className="rmdb-actor">
		<img alt="Actor Thumb" src={getImageUrl(actor.profile_path)} />
		<span className="rmdb-actor-name">{actor.name}</span>
		<span className="rmdb-actor-character">{actor.character}</span>
	</div>
);

export default Actor;
