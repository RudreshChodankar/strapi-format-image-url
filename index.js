module.exports = {
    formatStrapiImage(value, imageType) {
      if (value !== null && value !== undefined) {
        if (typeof value !== "string") {
          if (value.formats) {
            if (imageType === "thumbnail" && value?.formats?.thumbnail?.url) {
              return (
                strapi.config.get("constants.BACKEND_URL") +
                value.formats.thumbnail.url
              );
            } else if (imageType === "medium" && value?.formats?.medium?.url) {
              return (
                strapi.config.get("constants.BACKEND_URL") +
                value.formats.medium.url
              );
            } else if (imageType === "url" && value?.url) {
              return strapi.config.get("constants.BACKEND_URL") + value.url;
            } else if (value?.formats?.small?.url) {
              return (
                strapi.config.get("constants.BACKEND_URL") +
                value.formats.small.url
              );
            }
          } else {
            return strapi.config.get("constants.BACKEND_URL") + value.url;
          }
        } else {
          return value;
        }
      } else {
        return "";
      }
    },
  };
  
  
  