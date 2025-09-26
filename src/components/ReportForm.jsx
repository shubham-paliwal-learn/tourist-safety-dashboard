// src/components/ReportForm.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { CheckCircle, Upload } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const incidentTypes = ["Theft", "Accident", "Medical", "Lost Item", "Harassment"];

const ReportForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { addIncidentReport } = useAppContext();
  const [submission, setSubmission] = useState(null); // { txHash: '...', status: 'success' }
  const [imagePreview, setImagePreview] = useState(null);
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = (data) => {
    // In a real app, you would upload the image first
    // const imageUrl = await uploadImage(data.media[0]);
    const reportData = { ...data, media: imagePreview ? 'image_placeholder.jpg' : null };
    const txHash = addIncidentReport(reportData);
    setSubmission({ txHash, status: 'success' });
    reset();
    setImagePreview(null);
    setTimeout(() => setSubmission(null), 5000); // Reset form after 5s
  };

  if (submission) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center p-8 bg-safety-green/10 rounded-lg"
      >
        <CheckCircle className="mx-auto text-safety-green mb-4" size={48} />
        <h3 className="text-xl font-bold">Report Submitted Successfully</h3>
        <p className="text-sm text-text-secondary-light mt-2 break-all">
          Blockchain Receipt: <span className="font-mono">{submission.txHash}</span>
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="type" className="block text-sm font-medium text-text-secondary-light">
          Incident Type
        </label>
        <select
          id="type"
          {...register("type", { required: "Incident type is required" })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-blue focus:ring-primary-blue sm:text-sm p-2"
        >
          {incidentTypes.map(type => <option key={type} value={type}>{type}</option>)}
        </select>
        {errors.type && <p className="text-danger-red text-xs mt-1">{errors.type.message}</p>}
      </div>
      
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-text-secondary-light">
          Description
        </label>
        <textarea
          id="description"
          rows={4}
          {...register("description", { required: "A description is required" })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-blue focus:ring-primary-blue sm:text-sm p-2"
        />
        {errors.description && <p className="text-danger-red text-xs mt-1">{errors.description.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-text-secondary-light mb-1">
          Attach Photo/Video (Optional)
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            {imagePreview ? (
              <img src={imagePreview} alt="Preview" className="mx-auto h-24 w-auto rounded-md" />
            ) : (
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
            )}
            <div className="flex text-sm text-gray-600">
              <label htmlFor="media-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-primary-blue hover:text-primary-accent focus-within:outline-none">
                <span>Upload a file</span>
                <input id="media-upload" {...register("media")} type="file" className="sr-only" onChange={handleFileChange} accept="image/*,video/*" />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-primary-blue text-white font-bold py-3 px-4 rounded-lg hover:bg-primary-accent transition-colors"
      >
        Submit Report
      </button>
    </form>
  );
};

export default ReportForm;