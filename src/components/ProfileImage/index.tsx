import React from 'react';
import Image from 'next/image'
import me from '~/assets/images/me.jpg'
import {ProfileImageContainer} from '~/assets/styles/pages/about'

const ProfileImage = () => {
  return (
    <ProfileImageContainer>
      <Image
        alt="Jorge Gomes"
        src={me}
        placeholder="blur"
      />
    </ProfileImageContainer>
  )
}

export {ProfileImage};
