import EFIRForm from "@/components/e-fir-form";

export default function EFIRPage() {
  return (
    <div className="flex-1 space-y-8 p-4 md:p-8 bg-black text-teal-100 min-h-screen">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h1 className="text-3xl font-headline font-bold tracking-tight text-teal-100">Automated E-FIR Generation</h1>
          <p className="text-teal-400">
            Generate E-FIRs for missing person cases using AI.
          </p>
        </div>
      </div>
      <EFIRForm />
    </div>
  );
}
