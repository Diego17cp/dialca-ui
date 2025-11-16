import { Checkbox } from "dialca-ui";

export const BasicCheckboxExample: React.FC = () => {
    return (
        <Checkbox 
            label="Accept terms and conditions" 
            checked={true}
        />
    );
};