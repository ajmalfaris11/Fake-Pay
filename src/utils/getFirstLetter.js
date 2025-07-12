export default function getInitials(fullName) {
    const parts = fullName.trim().split(" ");
    return {
        first: parts[0] ? parts[0][0] : "",
        second: parts[2] ? parts[2][0] : parts[1] ? parts[1][0] : parts[0][1],
    };
}