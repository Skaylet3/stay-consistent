import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { Input } from './input'

const meta = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 300, display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    'aria-label': 'Default input',
  },
}

export const WithLabel: Story = {
  args: {
    'aria-label': 'Email',
    type: 'email',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox')

    await userEvent.type(input, 'test@example.com')
    await new Promise((resolve) => setTimeout(resolve, 100))

    await expect(input).toHaveValue('test@example.com')
  },
}

export const Password: Story = {
  args: {
    'aria-label': 'Password',
    type: 'password',
  },
}
