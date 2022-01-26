import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import LabelComponent from './index'

export default {
  title: 'Example/LabelComponent',
  component: LabelComponent,
  argTypes: {
    border: { control: 'border' }
  }
} as ComponentMeta<typeof LabelComponent>

const Template: ComponentStory<typeof LabelComponent> = (args) => <LabelComponent {...args} />

export const Block = Template.bind({})
Block.args = {
  value: 'display block',
  display: 'block'
}

export const InlineBlock = Template.bind({})
InlineBlock.args = {
  value: 'display inline-block',
  display: 'inline-block'
}

export const Inline = Template.bind({})
Inline.args = {
  value: 'display inline',
  display: 'inline'
}
