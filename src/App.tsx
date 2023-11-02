import { UiButton } from "./ui/ui-button/ui-button"
import { UiLink } from "./ui/ui-link/ui-link"
import UiSpinner from "./ui/ui-spinner/ui-spinner"
import { UiSelectField } from "./ui/ui-select-field/ui-select-field"
import { UiTextField } from "./ui/ui-text-field/ui-text-field"
import UiPageSpinner from "./ui/ui-page-spinner/ui-page-spinner"
import { UiLogo } from "./ui/ui-logo/ui-logo"
import { UiHeader } from "./ui/ui-header/ui-header"

function App() {
  return (
    <div className="flex justify-center gap-6 py-4">
      {/* <UiHeader className={"text-teal-950"} /> */}
      <UiButton variant="primary" onClick={()=>{console.log('!!!')}}>Hey</UiButton>
      <UiButton variant="secondary">Hey</UiButton>
      <UiButton variant="outlined">Sign Out</UiButton>
      <UiButton disabled variant="primary">Sign Out</UiButton>
      <UiTextField label="text field" inputProps={{placeholder: "Enter email... "}} />
      <UiTextField label="text field" error="alarm!!!" inputProps={{placeholder: "Enter email... "}} />
      <UiTextField error="alarm!!!" inputProps={{placeholder: "Enter email... "}} />
      <UiTextField  />
      <UiSelectField selectProps={{placeholder: "Enter email... "}} options={[{value: '1', label: "option1"},{value: '2', label: "option2"}]}/>
      {/* <UiLink to={'/ya.ru'}>text123</UiLink> */}
      <UiSpinner className={"text-teal-600 w-24 h-24"} />
      {/* <UiPageSpinner /> */}
      <UiLogo className={"text-teal-900 w-24 h-24 bg-rose-300"}/>
    </div>
  )
}

export default App
