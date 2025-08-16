<div align="center">

![DialcaUI Banner](./assets/DialcaUI%20Banner.png)

## Simple. Lightweight. Customizable 🚀

![NPM Version](https://img.shields.io/npm/v/dialca-ui?style=for-the-badge&color=%23e6a74c)
![GitHub last commit](https://img.shields.io/github/last-commit/diego17cp/dialca-ui?style=for-the-badge&color=%23e6a74c)
![GitHub License](https://img.shields.io/github/license/diego17cp/dialca-ui?style=for-the-badge&color=%23e6a74c)
![GitHub Repo stars](https://img.shields.io/github/stars/diego17cp/dialca-ui?style=for-the-badge&color=%23e6a74c)
![NPM Downloads](https://img.shields.io/npm/dw/dialca-ui?style=for-the-badge&color=%23e6a74c)
</div>
<div align="center">  
DialcaUI is an open source UI component library for React designed to help developers create attractive and accessible interfaces more quickly.
It includes ready-to-use components with flexible styles; just import and use.
</div>

<h2>Fast Links</h2>
<div align="center">
  <a href="#usage">Usage</a> •
  <a href="#components">Components</a> •
  <a href="#installation">Installation</a> •
  <a href="#styling">Styling</a> •
  <a href="#contribute">Contribute</a> 
</div>

---

<h2 id="installation">Installation⏬</h2>

```bash
# with Yarn
$ yarn add dialca-ui

# with npm
$ npm i dialca-ui

# with pnpm
$ pnpm add dialca-ui

# with Bun
$ bun add dialca-ui
```
<h2 id="usage">Basic Usage⚙️</h2>

First, import the package styles in your css entry file:

```css
@import 'dialca-ui/styles';
```

Now, you can use the components in your application:

```tsx
import { InputField } from 'dialca-ui';
import { useState } from "react";

export const App = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false)
    return (
        // Classic input without more config.
        <InputField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        // More complex input
        <InputField
            label="Password"
            value={password}
            required
            minLength={8}
            hasErrors={!password}
            errorMessage="The password is required."
            isPassword
            showPassword={showPassword}
            toggleVisibility={() => setShowPassword(!showPassword)}
            onChange={(e) => setPassword(e.target.value)}
        />
    )
}
```

<h2 id="components">Components ⚛️</h2>

- InputField: Text input component with validations and detect password; behavior available in [Basic Usage](#usage)
- Textarea: Textarea with auto resize by default, with small integrations such as character counters; a basic example:
  
```tsx
import { TxtArea } from "dialca-ui"
<TxtArea
  label="Default Textarea"
  value={txtArea}
  onChange={(e) => setTxtArea(e.target.value)}
  required
  hasCharCount
  charCountType="bottom"
  icon={<FaEnvelope />}
  hasErrors
  errorMessage="This field is required"
/>
```
- Select: Styled dropdown:
  - Disc: The options always must have the following format: { value: string, label: string }
```tsx
<Select
  label="Select an option"
  value={selectedOption}
  options={[
    {
      value: "option1",
      label: "Option 1",
    },
    {
      value: "option2",
      label: "Option 2",
    },
  ]}
  onChange={(e) => setSelectedOption(e.target.value)}
  // icon={<FaEnvelope />}
/>
```
- RadioInput: Classic radio inputs but handling one or more options
  - Disc: The options always must have the following format: { value: string, label: string, description?: string, disabled?: boolean }
  - Disc2: The onChange prop isn't the same as the original behavior; awaits for a string as param, like: onChange: (value: string) => void
```tsx
// With various options 
<RadioInput
  name="plan"
  value={plan}
  onChange={setPlan}
  variant="card"
  options={[
    {
      value: "basic",
      label: "Basic Plan",
      description: "$9.99/month - Normal features",
    },
    {
      value: "pro",
      label: "Pro Plan",
      description: "$19.99/month - Improved features",
    },
  ]}
/>
// Radio with just one option
<RadioInput
  name="terms"
  value={acceptTerms}
  onChange={setAcceptTerms}
  hasErrors={!acceptTerms}
  errorMessage="You must accept our conditions and terms"
  options={[
    {
      value: "accepted",
      label: "Accept the conditions and terms",
    },
  ]}
/>
```
- Loader: A classic loader with size variants, label and speed and direction options:
```tsx
<Loader />
{/* // Loader with sizing */}
<Loader size="lg" />
{/* the max value is 18 and min 5 */}
<Loader size={5} direction="counterclockwise" speed="slow" />
{/* // Loader with text */}
<Loader text="Loading..." showText />
```
- CircleCharCounter: A char counter in a field with styling percentage based:
```tsx
<CharCounter
  value={text}
  maxLength={100}
  size={40}
  // config prop allows you to customize the progress circle and the text color in its different states. and the text font size
  config={{
    strokeColor: {
      progress: "stroke-green-400",
      error: "stroke-red-500",
      warning: "stroke-yellow-400",
      background: "stroke-gray-200",
    },
    textColor: {
      progress: "text-green-500",
      error: "text-red-500",
      warning: "text-yellow-500",
    },
    fontSize: "text-sm",
 }}
  // classes prop allows you customize the container of the component or its text style.
 classes={{
    container: "shadow-md",
    text: "tracking-wide",
 }}
/>
```
- DropZone: A drag and drop area component for different files to upload.
  - Disc: For the proper functioning of the component, make sure have an input for the click behavior (temp) 
```tsx
<DropZone
  isDragging={false}
  onDragOver={() => {}}
  onDragLeave={() => {}}
  onDrop={() => {}}
  onClick={() => {}}
  description="Upload your image"
  icon={<FaFileArrowUp />}
  hasErrors
  errorMessage="Solo se permiten imágenes"
  errorIcon={<FaCircleExclamation />}
/>
```
<h2 id="styling"> Theming & Styling🎨</h2>
DialcaUI supports variants or class overrides.
- For override only classes pass "classes" prop with its corresponding key:values

```tsx
<InputField
  label="Email"
  classes={{
    container: "my-custom-container",
    input: "border-red-500",
  }}
/>
```
- To use the variants system make sure pass the 3 essential props: "variant", "extendDefault", "variants":

```tsx
<RadioInput
  name="theme"
  // variant name, could be an existing variant, or new one, like this example
  variant="fancy"
  /* The extendDefault prop makes it extends the base styles, by default it's true; if it's false the component doesn't have styles
  it's useful if you want customize totally the component or not */
  extendDefault
  // The variants prop declare the new variant you create for the component
  // The sytax is like: { variant_name : { normal: { component parts }, other_state: {} } }
  // You must declare first the variant name, inner that must have the normal object with the component parts to customize, that's the normal style, you could add more states for that component.
  variants={{
    fancy: {
      normal : {
        container: "border-2 border-pink-500 rounded-lg p-3",
        text: "text-pink-600 font-semibold",
      }
    }
  }}
  options={[
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
  ]}
/>

```
<h2 id="contribute">Contributing🤝</h2>
We welcome contributions! 🎉
Fork, make a feature branch, and submit a PR 🚀.

```bash
git clone https://github.com/diego17cp/dialca-ui.git
cd dialca-ui
npm install
npm run dev

```
<h2 id="license">License📜</h2>

MIT © [Dialcadev](https://github.com/Diego17cp)