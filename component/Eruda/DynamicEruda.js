'use client'

import dynamic from 'next/dynamic'

const DynamicEruda = dynamic(() => import('./Eruda'), {
  ssr: false
})

export default DynamicEruda
