import './MovieForm.scss';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Movie } from '../models/Movie';
import { addMovie, updateMovie } from '../services/api';

const MovieSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required'),
  price: Yup.number()
    .positive('Price must be positive')
    .required('Price is required'),
  genre: Yup.string()
    .nullable(),
  year: Yup.number()
    .min(1900, 'Year must be after 1900')
    .max(new Date().getFullYear(), 'Year must be current year or in the past')
    .nullable(),
  duration: Yup.object({
    hours: Yup.number()
      .min(0, 'Hours must be at least 0')
      .nullable(),
    minutes: Yup.number()
      .min(0, 'Minutes must be at least 0')
      .nullable()
  }).nullable(),
  plot: Yup.string()
    .nullable(),
  impact: Yup.string()
    .nullable()
});

function MovieForm() {

  const handleMovieSubmit = async (values: Movie, {resetForm}: {resetForm: () => void }) => {
    if (values.id) {
      await updateMovie(values);
    }
    else {
      await addMovie(values);
    }

    resetForm();
  };

  return (
    <div className='movie-form-container'>

      <Formik
      initialValues={{
        title: '',
        genre: '',
        year: undefined,
        duration: {
          hours: undefined,
          minutes: undefined
        },
        price: NaN,
        plot: '',
        impact: ''
      }}
      validationSchema={MovieSchema}
      onSubmit={handleMovieSubmit}
      >
        {({errors, touched}) => (
          <Form className='form-container'>
            <div className='form-title'>
              <label htmlFor='title'>Title:</label>
              <Field type='text' name='title' id='title' placeholder='Name of the movie' />
              {errors.title && touched.title ? (
                <div className='error-message'>{errors.title}</div>
              ): null}
            </div>
            
            <div className='form-price'>
              <label htmlFor='price'>Price:</label>
              <Field type='number' name='price' id='price' placeholder='Price per ticket (kr)' />
              {errors.price && touched.price ? (
                <div className='error-message'>{errors.price}</div>
              ): null}
            </div>

            <div className='form-genre'>
              <label htmlFor='price'>Genre:</label>
              <Field type='text' name='genre' id='genre' placeholder='Genre of the movie' />
              {errors.genre && touched.genre ? (
                <div className='error-message'>{errors.genre}</div>
              ): null}
            </div>

            <div className='form-year'>
              <label htmlFor='year'>Year:</label>
              <Field type='number' name='year' id='year' placeholder='Movie release year' />
              {errors.year && touched.year ? (
                <div className='error-message'>{errors.year}</div>
              ): null}
            </div>

            <div className='form-duration'>
              <label htmlFor='duration'>Duration:</label>

              <Field type='number' name='duration.hours' id='duration.hours' placeholder='Hours' />
              {errors.duration?.hours && touched.duration?.hours ? (
                <div className='error-message'>{errors.duration?.hours}</div>
              ): null}
              
              <Field type='number' name='duration.minutes' id='duration.minutes' placeholder='Minutes over the hour' />
              {errors.duration?.minutes && touched.duration?.minutes ? (
                <div className='error-message'>{errors.duration?.minutes}</div>
              ): null}
            </div>

            <div className='form-plot'>
              <label htmlFor='plot'>Plot:</label>
              <Field type='text' name='plot' id='plot' placeholder='Short description of the movie plot' />
              {errors.plot && touched.plot ? (
                <div className='error-message'>{errors.plot}</div>
              ): null}
            </div>

            <div className='form-impact'>
              <label htmlFor='impact'>Impact:</label>
              <Field type='text' name='impact' id='impact' placeholder='Short description of the impact on the industry' />
              {errors.impact && touched.impact ? (
                <div className='error-message'>{errors.impact}</div>
              ): null}
            </div>

            <button type='submit' className='form-button'>Save</button>
          </Form>
        )}

      </Formik>
    </div>
  );
}

export default MovieForm;