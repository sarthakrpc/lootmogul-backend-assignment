function randBetween(min, max) {
  let delta = max - min;
  return Math.round(min + Math.random() * delta);
}

export default randBetween;
