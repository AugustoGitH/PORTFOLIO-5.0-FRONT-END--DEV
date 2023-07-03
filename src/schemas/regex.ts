const regex = {
  REGEX_URL_WEBSITE:
    /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
  REGEX_URL_YOUTUBE:
    /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=)?([a-zA-Z0-9_-]{11})$/,
  REGEX_URL_REPO_GITHUB:
    /^(https?:\/\/)?(www\.)?github\.com\/([A-Za-z0-9_-]+\/[A-Za-z0-9_-]+)(\/)?$/
};

export default regex;
