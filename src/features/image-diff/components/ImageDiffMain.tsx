import { styled } from 'goober'
import React from 'react'
import ImageFileProvider from '~/features/image-diff/components/ImageDiffProvider'
import ImageForm from '~/features/image-diff/components/ImageForm'

const PoweredBy = styled('p')`
  margin-top: 1.5rem;
  font-size: 0.8rem;
  text-align: end;
`

const ImageDiffMain = () => {
  return (
    <ImageFileProvider>
      <ImageForm />
      <PoweredBy>
        {'Made by Harvey - '}
        <a href='https://synck.io.vn/' target='_blank' rel='noopener noreferrer'>
          Synck
        </a>
      </PoweredBy>
    </ImageFileProvider>
  )
}

export default ImageDiffMain
