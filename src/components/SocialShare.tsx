import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Mail, 
  Link as LinkIcon, 
  Share2,
  Check
} from 'lucide-react';

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
  className?: string;
  showLabel?: boolean;
}

const SocialShare = ({ 
  url, 
  title, 
  description = '', 
  className = '',
  showLabel = false 
}: SocialShareProps) => {
  const [copied, setCopied] = useState(false);
  
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const shareButtons = [
    {
      name: 'Facebook',
      icon: Facebook,
      href: shareLinks.facebook,
      color: 'hover:bg-blue-600 hover:text-white'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: shareLinks.twitter,
      color: 'hover:bg-sky-500 hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: shareLinks.linkedin,
      color: 'hover:bg-blue-700 hover:text-white'
    },
    {
      name: 'Email',
      icon: Mail,
      href: shareLinks.email,
      color: 'hover:bg-red-500 hover:text-white'
    }
  ];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {showLabel && (
        <span className="text-sm font-medium text-muted-foreground mr-2">
          Share:
        </span>
      )}
      
      <div className="flex items-center gap-1">
        {shareButtons.map((button) => (
          <Button
            key={button.name}
            variant="outline"
            size="sm"
            asChild
            className={`h-8 w-8 p-0 border-villa-stone text-muted-foreground ${button.color} transition-all duration-200`}
            title={`Share on ${button.name}`}
          >
            <a
              href={button.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share on ${button.name}`}
            >
              <button.icon size={14} />
            </a>
          </Button>
        ))}
        
        <Button
          variant="outline"
          size="sm"
          onClick={copyToClipboard}
          className={`h-8 w-8 p-0 border-villa-stone text-muted-foreground hover:bg-green-500 hover:text-white transition-all duration-200 ${
            copied ? 'bg-green-500 text-white' : ''
          }`}
          title="Copy link"
        >
          {copied ? <Check size={14} /> : <LinkIcon size={14} />}
        </Button>
      </div>
    </div>
  );
};

// Blog post specific sharing component
export const BlogShare = ({ 
  slug, 
  title, 
  description 
}: { 
  slug: string; 
  title: string; 
  description: string; 
}) => {
  const baseUrl = import.meta.env.VITE_SITE_URL || 'https://villaoliviaclara.com';
  const url = `${baseUrl}/blog/${slug}`;
  
  return (
    <div className="border-t border-villa-stone pt-6 mt-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-villa-olive mb-2">
            Share this article
          </h3>
          <p className="text-sm text-muted-foreground">
            Help others discover Villa Olivia Clara
          </p>
        </div>
        <SocialShare 
          url={url}
          title={title}
          description={description}
          showLabel={false}
        />
      </div>
    </div>
  );
};

export default SocialShare;
