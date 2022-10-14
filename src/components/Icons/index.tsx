import React from 'react';
import Image from 'next/image'
import linkedin from '~/assets/images/linkedin.png'
import github from '~/assets/images/github.png'
import twitter from '~/assets/images/twitter.png'
import {IconsContent} from '~/assets/styles/pages/contact'
import Link from 'next/link'

type IconsProps = {
  name: 'linkedin' | 'github' |'twitter';
}

const Icons = ({name}: IconsProps) => {
  return (
    <IconsContent>
      {name === 'linkedin' && (
        <Link href="https://www.linkedin.com/in/jluizgomes/" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <Image
              alt="Jorge Gomes at LinkedIn"
              src={linkedin}
              placeholder="blur"
            />
          </a>
        </Link>
      )}
      {name === 'github' && (
        <Link href="https://github.com/jluizgomes" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <Image
              alt="Jorge Gomes at GitHub"
              src={github}
              placeholder="blur"
            />
          </a>
        </Link>
      )}
      {name === 'twitter' && (
        <Link href="https://twitter.com/jluizgomes" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <Image
              alt="Jorge Gomes at Twitter"
              src={twitter}
              placeholder="blur"
            />
          </a>
        </Link>
      )}
    </IconsContent>
  )
}

export {Icons};
