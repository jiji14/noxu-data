type CustomButtonProps = {
  handleClick: () => void;
  children: React.ReactNode;
  type?: string;
};

export default function CustomButton({
  handleClick,
  children,
  type = "default",
}: CustomButtonProps) {
  return (
    <button
      className="px-4 py-2 line-6 border border-solid border-1 border-slate-300 rounded-md text-slate-900"
      style={
        type === "highlight" ? { borderColor: "#DC2626", color: "#DC2626" } : {}
      }
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
