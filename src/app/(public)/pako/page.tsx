"use client"
import React, { useEffect } from 'react'
import data from './data.json'
import pako from 'pako'

const Pako = () => {
    useEffect(() => {
    const compressedData = pako.deflate(JSON.stringify(data.data), { to: 'string' });
    
    console.log(compressedData); 

    const originalSize = new TextEncoder().encode(JSON.stringify(data.data)).length;
const compressedSize = compressedData.length;

console.log(`Original Size: ${originalSize} bytes`);
console.log(`Compressed Size: ${compressedSize} bytes`);
console.log(`Compression Ratio: ${(compressedSize / originalSize * 100).toFixed(2)}%`);

    const decompressedData = JSON.parse(pako.inflate(compressedData, { to: 'string' }));

console.log(decompressedData);
    }
  )
  return (
    <div>
        hellow

        {typeof data.data} here
    </div>
  )
}

export default Pako