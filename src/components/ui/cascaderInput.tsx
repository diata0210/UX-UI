import {  Select } from "antd";

interface Option {
  value: string;
  label: string;
}

interface SettingFilterProps {
  label: string;
  options: Option[];
}

const SettingFilter: React.FC<SettingFilterProps> = ({
  label,
  options,
}) => {
  return (
    <div className="flex flex-col 2xl:gap-[14px] xl:gap-[10px] gap-[5px]">
      <div className="text-[14px] xl:text-[16px]">{label}</div>
      <Select
        className="w-full xl:h-[40px] h-[32px]"
        defaultValue={options[0].value}
        options={options}
      >
      </Select>
    </div>
  );
};

export default SettingFilter;
