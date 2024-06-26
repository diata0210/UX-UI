type Props = {
  setPopup: (visible: boolean) => void;
  // isVisible: boolean;
};
import { Button } from "@/components/ui/button";
import { CloseOutlined, InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Input, message, Upload } from "antd";
import { toast } from "react-toastify";

const { Dragger } = Upload;
const { TextArea } = Input;

export default function PopupHelp({ setPopup }: Props) {
  const props: UploadProps = {
    name: "file",
    multiple: true,
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const handleSubmit = () => {
    setPopup(false);
    toast.success("Gửi thành công")
  }

  return (
    <>
      <section className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="items-end px-11 pt-9 tex py-[20px] text-lg font-medium text-gray-800 bg-white rounded-2xl shadow-sm w-[536px] max-md:px-5">
          <CloseOutlined
            className="text-[20px] text-[#1d2d35] flex justify-end"
            onClick={() => setPopup(false)}
          />
          <header className="flex flex-row text-3xl text-text-default text-center justify-center w-full">
            <div className="text-[26px] font-medium text-blue-500 w-full justify-center">
              Bạn cần trợ giúp gì ?
            </div>
          </header>
          <div className="flex flex-col gap-[40px]">
            <div className="flex flex-col gap-[26px]">
              <div className="flex flex-col gap-[5px]">
                <div className="mt-[20px]">Mô tả vấn đề của bạn</div>
                <TextArea rows={4} placeholder="Mô tả vấn đề" maxLength={6} />
              </div>
              <div className="flex flex-col gap-[5px]">
                <div>
                  Ảnh chụp màn hình sẽ giúp chúng tôi hiểu rõ hơn về vấn đề của
                  bạn. (không bắt buộc)
                </div>
                <div>
                  <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Bấm hoặc kéo thả ảnh vào đây
                    </p>
                    <p className="ant-upload-hint">
                      Hỗ trợ đăng tải một hay nhiều ảnh cùng lúc
                    </p>
                  </Dragger>
                </div>
              </div>
            </div>
  
            <div className="w-full flex flex-row justify-end hover:opacity-90">
              <Button variant="submit" size="sm" onClick={handleSubmit}>Gửi</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}