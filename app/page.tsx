"use client"

import { useState } from 'react'

import { Button } from "@/components/button"
import { LabeledInput } from "@/components/labeled_input"

export default function Home() {
  const handleClick = () => {
    console.log(itemNameValue, itemDescriptionValue);
  };

  const [itemNameValue, setItemNameValue] = useState('')
  const [itemDescriptionValue, setItemDescriptionValue] = useState('')

  return (
    <main>
      <h1>Rememberer</h1>

      <br />
      <br />

      <LabeledInput
        label="Item Name"
        id="item_name_input"
        type="text"
        placeholder="Enter Name Here!"
        value={itemNameValue}
        onChange={(newValue) => {setItemNameValue(newValue.target.value)}}
      />

      <LabeledInput
        label="Item Description"
        id="item_description_input"
        type="text"
        placeholder="Enter Description Here!"
        value={itemDescriptionValue}
        onChange={(newValue) => {setItemDescriptionValue(newValue.target.value)}}
      />

      <LabeledInput
        label="Item Class"
        type="text"
        placeholder="Select Class Here!"
      />

      <br />
      <br />

      <Button variant={"outline"} onClick={handleClick}>Add Item</Button>
    </main>
  );
}
