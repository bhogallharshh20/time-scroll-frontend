import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, FileText, Image as ImageIcon, Trash2, Lock, Unlock } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface CapsuleFile {
  name: string;
  type: string;
  size: number;
  data?: string;
}

interface Capsule {
  id: string;
  title: string;
  message: string;
  unlockDate: string;
  files: CapsuleFile[];
  createdAt: string;
}

const CapsuleGallery = () => {
  const [capsules, setCapsules] = useState<Capsule[]>([]);
  const [selectedCapsule, setSelectedCapsule] = useState<Capsule | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const loadCapsules = () => {
    const stored = localStorage.getItem('timeCapsules');
    if (stored) {
      setCapsules(JSON.parse(stored));
    }
  };

  useEffect(() => {
    loadCapsules();
    
    // Listen for updates from CreateCapsule component
    const handleUpdate = () => loadCapsules();
    window.addEventListener('capsulesUpdated', handleUpdate);
    
    return () => window.removeEventListener('capsulesUpdated', handleUpdate);
  }, []);

  const handleDelete = (id: string) => {
    const updated = capsules.filter(c => c.id !== id);
    localStorage.setItem('timeCapsules', JSON.stringify(updated));
    setCapsules(updated);
    setDeleteId(null);
    toast.success("Capsule deleted");
  };

  const isUnlocked = (unlockDate: string) => {
    return new Date(unlockDate) <= new Date();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (capsules.length === 0) {
    return (
      <section className="py-24 px-4 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-fadeIn">
            <Clock className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-2xl font-semibold mb-2">No Time Capsules Yet</h3>
            <p className="text-muted-foreground">
              Create your first capsule to preserve your memories
            </p>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <section className="py-24 px-4 bg-gradient-hero">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Your <span className="bg-gradient-accent bg-clip-text text-transparent">Time Capsules</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              {capsules.length} {capsules.length === 1 ? 'capsule' : 'capsules'} preserving your memories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {capsules.map((capsule, index) => {
              const unlocked = isUnlocked(capsule.unlockDate);
              
              return (
                <Card 
                  key={capsule.id}
                  className="p-6 hover:shadow-glow transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm animate-fadeIn group cursor-pointer relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => unlocked && setSelectedCapsule(capsule)}
                >
                  {/* Status badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
                    unlocked 
                      ? 'bg-accent/10 text-accent' 
                      : 'bg-primary/10 text-primary'
                  }`}>
                    {unlocked ? (
                      <>
                        <Unlock className="w-3 h-3" />
                        Unlocked
                      </>
                    ) : (
                      <>
                        <Lock className="w-3 h-3" />
                        Locked
                      </>
                    )}
                  </div>

                  <div className="mb-4 pt-2">
                    <h3 className="text-xl font-semibold mb-2 pr-20 group-hover:text-primary transition-colors">
                      {capsule.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {capsule.message}
                    </p>
                  </div>

                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Unlock: {formatDate(capsule.unlockDate)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>Created: {formatDate(capsule.createdAt)}</span>
                    </div>
                  </div>

                  {capsule.files.length > 0 && (
                    <div className="flex items-center gap-2 mb-4 text-sm">
                      {capsule.files.some(f => f.type.startsWith('image/')) && (
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <ImageIcon className="w-4 h-4" />
                          <span>{capsule.files.filter(f => f.type.startsWith('image/')).length}</span>
                        </div>
                      )}
                      {capsule.files.some(f => !f.type.startsWith('image/')) && (
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <FileText className="w-4 h-4" />
                          <span>{capsule.files.filter(f => !f.type.startsWith('image/')).length}</span>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (unlocked) {
                          setSelectedCapsule(capsule);
                        } else {
                          toast.info("This capsule is still locked!");
                        }
                      }}
                      disabled={!unlocked}
                    >
                      {unlocked ? 'Open' : 'Locked'}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setDeleteId(capsule.id);
                      }}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* View Capsule Dialog */}
      {selectedCapsule && (
        <AlertDialog open={!!selectedCapsule} onOpenChange={() => setSelectedCapsule(null)}>
          <AlertDialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-2xl">{selectedCapsule.title}</AlertDialogTitle>
              <AlertDialogDescription className="text-base pt-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Message:</h4>
                    <p className="whitespace-pre-wrap">{selectedCapsule.message}</p>
                  </div>

                  {selectedCapsule.files.length > 0 && (
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Files ({selectedCapsule.files.length}):</h4>
                      <div className="space-y-2">
                        {selectedCapsule.files.map((file, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                            {file.type.startsWith('image/') ? (
                              <>
                                <ImageIcon className="w-5 h-5 text-primary flex-shrink-0" />
                                {file.data && (
                                  <img 
                                    src={file.data} 
                                    alt={file.name}
                                    className="w-full h-auto rounded-md mt-2"
                                  />
                                )}
                              </>
                            ) : (
                              <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate text-foreground">{file.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {(file.size / 1024).toFixed(1)} KB
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4 border-t">
                    <Calendar className="w-4 h-4" />
                    <span>Unlocked on {formatDate(selectedCapsule.unlockDate)}</span>
                  </div>
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction>Close</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Time Capsule?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your time capsule and all its contents.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => deleteId && handleDelete(deleteId)}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default CapsuleGallery;
