const notifications = document.getElementById('notifications');
const buttons = {
    success: document.getElementById('success'),
    error: document.getElementById('error'),
    warning: document.getElementById('warning'),
    info: document.getElementById('info')
};

const toastDetails = {
    success: {
        icon: 'fa-solid fa-circle-check',
        title: 'Success',
        message: 'Action completed successfully!'
    },
    error: {
        icon: 'fa-solid fa-circle-xmark',
        title: 'Error',
        message: 'Something went wrong. Please try again.'
    },
    warning: {
        icon: 'fa-solid fa-triangle-exclamation',
        title: 'Warning',
        message: 'Please review the information provided.'
    },
    info: {
        icon: 'fa-solid fa-circle-info',
        title: 'Information',
        message: 'New updates are available for your account.'
    }
};

function removeToast(toast) {
    toast.classList.add('hiding');
    // Wait for animation to finish before removing from DOM
    toast.addEventListener('animationend', () => {
        toast.remove();
    });
}

function createToast(type) {
    const { icon, title, message } = toastDetails[type];
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    toast.innerHTML = `
        <i class="${icon}"></i>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="close-btn">
            <i class="fa-solid fa-xmark"></i>
        </button>
    `;

    // Append to container
    notifications.appendChild(toast);

    // Auto remove after 5 seconds
    const timeoutId = setTimeout(() => removeToast(toast), 5000);

    // Close button functionality
    const closeBtn = toast.querySelector('.close-btn');
    closeBtn.onclick = () => {
        clearTimeout(timeoutId);
        removeToast(toast);
    };
}

// Add event listeners to buttons
Object.keys(buttons).forEach(type => {
    buttons[type].onclick = () => createToast(type);
});