interface Payload {
  id: string;
  name: string;
  role_id: number;
  exp: number;
}

const parseJwtPayload = (token: string): Payload | null => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = Buffer.from(base64, "base64").toString("utf-8");
    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
};

export default parseJwtPayload;
