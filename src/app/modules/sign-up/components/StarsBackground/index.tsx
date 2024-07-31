import React from 'react'
import Image from 'next/image'

import { FlexRow } from '@/app/modules/components'

type Star = {
  pos: {
    top?: string;
    insetInlineStart?: string;
    insetInlineEnd?: string;
    bottom?: string
  };
  size: number;
}

const stars: Star[] = [
  { pos: { top: '27%', insetInlineStart: '22%' }, size: 22 },
  { pos: { top: '22%', insetInlineStart: '31%' }, size: 16 },
  { pos: { top: '5%', insetInlineEnd: '10%' }, size: 16 },
  { pos: { top: '75%', insetInlineStart: '25%' }, size: 27 },
  { pos: { top: '80%', insetInlineEnd: '25%' }, size: 21 },
  { pos: { bottom: '5%', insetInlineStart: '20%' }, size: 14 }
]

const StarsBackground = () => {
  return (
    <FlexRow
      w={{ xs: '100%', sm: 400, md: 500 }}
      h={{ xs: '100%' }}
      position={{ xs: 'absolute' }}
      style={{ top: 0, bottom: 0 }}
    >
      {stars.map(({ pos, size }, index) => (
        <FlexRow
          key={`star-${index}`}
          w={{ xs: 'auto' }}
          position={{ xs: 'absolute' }}
          style={pos}
        >
          <Image
            src="/star.svg"
            alt="Star"
            width={size}
            height={size}
          />
        </FlexRow>
      ))}
    </FlexRow>
  )
}

export default StarsBackground