export default (id: number) => {
  console.log(`Stream ended ${id === 3 ? 'by user' : ''}`);
  process.exit(1);
};
