function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

function downloadResume() {
    // URL of the PDF file
    const pdfUrl = 'assets/resume.pdf';
    
    // Create a temporary <a> element to trigger the download
    const downloadLink = document.createElement('a');
    downloadLink.href = pdfUrl;
    downloadLink.download = 'iaconis_sophia_resume.pdf'; // Specify the filename
    
    // Simulate a click on the link to trigger the download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    
    // Clean up resources after the download link is clicked
    document.body.removeChild(downloadLink);
}

function openEmail() {
    window.open("mailto:sophia.iaconis@ufl.edu");
}