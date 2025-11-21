import ApplicantForm from "../../../components/ApplicantForm";

function ApplicantsForm() {
    return (
    <div className="max-w-3xl mx-auto my-10 p-8 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Operation Holiday at Home – Applicant Form
      </h2>
      <div>
        <ApplicantForm />
      </div>
    </div>
  );
}

export default ApplicantsForm;