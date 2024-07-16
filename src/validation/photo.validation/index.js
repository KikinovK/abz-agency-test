import * as Yup from 'yup';

const fileDimensions = (file, minWidth, minHeight) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      if (img.width >= minWidth && img.height >= minHeight) {
        resolve(true);
      } else {
        resolve(false);
      }
    };
  });
};

const photo = Yup.mixed()
.required('Photo is required')
.test('fileFormat', 'The photo format must be jpeg/jpg type', value => {
  return value && ['image/jpeg', 'image/jpg'].includes(value.type);
})
.test('fileSize', 'The photo size must not be greater than 5 Mb', value => {
  return value && value.size <= 5 * 1024 * 1024;
})
.test('fileDimensions', 'Minimum size of photo 70x70px', async value => {
  return value && await fileDimensions(value, 70, 70);
})

export default photo;
