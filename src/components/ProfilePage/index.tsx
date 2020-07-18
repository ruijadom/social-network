import React from 'react';

import Feed from '../Feed';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
	return (
		<Container>
			<Banner>
				<Avatar />
			</Banner>

			<ProfileData>
				<EditButton outlined>Edit</EditButton>
				<h1>Rui Domingues</h1>
				<h2>@ruijadomingues</h2>

				<p>Front End Developer <a href="https://github.com/ruijadom"></a></p>

				<ul>
					<li>
						<LocationIcon />
						Viana do Castelo
					</li>
					<li>
						<CakeIcon />
						10 de Julho de 1982
					</li>
				</ul>

				<Followage>
					<span>
						following <strong>95</strong>
					</span>
					<span>
						100 <strong>followers</strong>
					</span>
				</Followage>
			</ProfileData>

			<Feed />

		</Container>
	);
}

export default ProfilePage;